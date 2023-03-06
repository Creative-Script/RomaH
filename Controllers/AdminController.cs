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
public class AdminController : ControllerBase
{
    private readonly ILogger<AuthController> _logger;
    private readonly MyContext _context;

    public AdminController(MyContext context,ILogger<AuthController> logger)
    {
        _context = context;
        _logger = logger;
    }

    [HttpPost]
    public async Task<ActionResult> Post([FromBody] User newUser)
    {
        newUser.Password  = HashPassword(newUser.Password);
        
        var ExistingAdmin = _context.Users.FirstOrDefault(u=> u.UserType=="admin");
        if( ExistingAdmin!= null){
            return BadRequest("user exists");
        }
        Console.WriteLine(_context.Users.Add(newUser));
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(newUser), new { id = newUser.Id }, newUser);
    }
    [HttpGet]
    public async Task<ActionResult<IEnumerable<User>>> GetUser()
    {
        return await _context.Users.ToListAsync();
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
    // public  IEssssss
}
