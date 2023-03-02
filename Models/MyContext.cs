using Microsoft.EntityFrameworkCore;

public class MyContext: DbContext
{
    public MyContext(DbContextOptions<MyContext> options): base(options)
    {

    }
    public DbSet<User> Users {get; set;}
    public DbSet<Room> Rooms {get; set;}
}