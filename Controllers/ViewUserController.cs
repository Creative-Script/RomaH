using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace romahotel.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ViewUserController : ControllerBase
{
    private readonly ILogger<ViewUserController> _logger;
    private readonly MyContext _context;

    public ViewUserController(MyContext context, ILogger<ViewUserController> logger)
    {
        _logger = logger;
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<User>>> GetUsers()
    {
        return await _context.Users.ToListAsync();
    }
}

