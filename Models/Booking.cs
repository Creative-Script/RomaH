
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Booking
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    public int RoomId { get; set; }
    public Room Room { get; set; }
    public DateTime? CheckIn { get; set; }
    public DateTime? CheckOut { get; set; }
    public int NumberOfGuests { get; set; }
    public string? status {get; set;} = "pending";
    public User? User {get; set;}
    public User? CheckedInBy {get; set;}
    public User? CheckedOutBy {get; set;}

 }