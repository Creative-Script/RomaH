using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace romahotel.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RoomController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<Room> _logger;
    private readonly MyContext _context;

    public RoomController(MyContext context, ILogger<Room> logger)
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
    public async Task<ActionResult<IEnumerable<Room>>> GetRooms()
    {
        return await _context.Rooms.ToListAsync();
    }
}
