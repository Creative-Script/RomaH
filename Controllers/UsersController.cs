
using System.Security.Cryptography;
using System.Text;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace romahotel.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase {
    private readonly ILogger<UserController> _logger;
    private readonly MyContext _context;

    public UserController(MyContext context, ILogger<UserController> logger)
    {
        _logger = logger;
        _context = context;

    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<User>>> Get()
    {
        return await _context.Users.ToListAsync();
    }

    [HttpPost]
    public async Task<ActionResult<IEnumerable<User>>> Post(User newUser)
    {
        newUser.Password  = HashPassword(newUser.Password);
        if( newUser.UserType== "admin"){
            return BadRequest("invalid");
        }
        var ExistingUser = _context.Users.FirstOrDefault(u=> (u.Email==newUser.Email || u.Username==newUser.Username) && u.Password!=null);
        if( ExistingUser!= null){
            return BadRequest("user exists");
        }
        Console.WriteLine(_context.Users.Add(newUser));
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(newUser), new { id = newUser.Id }, newUser);
    }
    [HttpPatch]
    public async Task<ActionResult<IEnumerable<User>>> Patch(User newUser)
    {
        // _context.Users.Update()
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
    
}