using Microsoft.AspNetCore.Mvc;
using System.Security.Cryptography;
using System.Text;
using Microsoft.EntityFrameworkCore;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

using System;



namespace romahotel.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{

    private readonly ILogger<AuthController> _logger;
    private readonly MyContext _context;

    public AuthController(MyContext context,ILogger<AuthController> logger)
    {
        _context = context;
        _logger = logger;
    }

    [HttpPost]
    public async Task<ActionResult> Post()
    {
        string? authHeader = Request.Headers["Authorization"];
        if (authHeader != null && authHeader.StartsWith("Basic "))
        {
            // Extract credentials and decode them
            string encodedUsernamePassword = authHeader.Substring("Basic ".Length).Trim();
            Encoding encoding = Encoding.GetEncoding("iso-8859-1");
            string usernamePassword = encoding.GetString(Convert.FromBase64String(encodedUsernamePassword));

            // Split username and password
            int separatorIndex = usernamePassword.IndexOf(':');
            string username = usernamePassword.Substring(0, separatorIndex);
            string password = HashPassword(usernamePassword.Substring(separatorIndex + 1));
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Username == username && u.Password == password);
            // bool userExists = await _context.Users.AnyAsync(u => u.Username == username && u.Password == password);
            Console.WriteLine(username);
            Console.WriteLine(password);
            Console.WriteLine(user);
            if (user == null)
            {
                return Unauthorized();
            }
            
            return Ok(new
            {
                username = user.Username,
                type  =  user.UserType,
                email = user.Email,
                name = user.FirstName,
                token = GenerateJwtToken(user)
            });
            
        }
        return Unauthorized();
        // return await
        // return await _context.Rooms.ToListAsync();
    }
    private string HashPassword(string password) {
        string hashedPassword;
        using (MD5 md5 = MD5.Create())
        {
            byte[] inputBytes = Encoding.ASCII.GetBytes(password);
            byte[] hashBytes = md5.ComputeHash(inputBytes);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < hashBytes.Length; i++)
            {
                sb.Append(hashBytes[i].ToString("x2"));
            }
            hashedPassword = sb.ToString();
        }
        return hashedPassword;
    }

    private Dictionary<string, string> AuthorizationResponse(string password) {
        Dictionary<string,string> response = new Dictionary<string, string>();
        
        return response;
    }

    private string GenerateJwtToken(User user)
    {
        var tokenHandler = new JwtSecurityTokenHandler();
        var key = Encoding.ASCII.GetBytes(Environment.GetEnvironmentVariable("SECURITY_KEY"));
        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(new Claim[]
            {
            new Claim(ClaimTypes.Name, user.Username),
            new Claim(ClaimTypes.Role, user.UserType),
            new Claim(ClaimTypes.Email,user.Email),
            new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
            }),
            Expires = DateTime.UtcNow.AddDays(7),
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
        };
        var token = tokenHandler.CreateToken(tokenDescriptor);
        var tokenString = tokenHandler.WriteToken(token);
        return tokenString;
    }
    // public  IE
}
