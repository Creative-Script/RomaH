using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace romahotel.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ViewUserController : ControllerBase
{
    private readonly ILogger<Room> _logger;
    private readonly MyContext _context;

    public ViewUserController(MyContext context, ILogger<Room> logger)
    {
        _logger = logger;
        _context = context;
    }

    // [HttpGet]
    // public IEnumerable<Room> Get()
    // {
    //     return Enumerable.Range(1, 5).Select(index => new Room
    //     {
    //         Name="TEStin",
    //         Description="Trest "
    //     })
    //     .ToArray();
    // }
    [HttpGet]
    public async Task<ActionResult<IEnumerable<User>>> GetUsers()
    {
        return await _context.Users.ToListAsync();
    }
}

