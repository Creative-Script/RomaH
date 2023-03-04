
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class User
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    public string? Username {get; set;}
    public string? Password {get; set;}
    public string Email {get; set;}
    public string? FirstName {get; set;}
    public string? LastName {get; set;}
    public string UserType {get; set;} ="client";
    public string? CreatedAt {get; set;}
    public DateTime? LastLogin {get; set;}
    public DateTime? Dob {get; set;}
    public string? CreatedBy {get; set;}
    public string? Image {get; set;}
}
