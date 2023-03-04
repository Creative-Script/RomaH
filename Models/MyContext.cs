using Microsoft.EntityFrameworkCore;

public class MyContext: DbContext
{
    public MyContext(DbContextOptions<MyContext> options): base(options)
    {

    }
    public DbSet<User> Users {get; set;}
    public DbSet<Room> Rooms {get; set;}
    public DbSet<RoomCategory> RoomCategories {get; set;}

    public DbSet<Booking> Bookings {get; set;}
    public DbSet<About> Abouts {get; set;}
    public DbSet<Photo> Photos {get; set;}
    public DbSet<Payment> Payments {get;set ;}

}