public class User
{
    public int Id { get; set; }
    public string Username {get; set;}
    public string Password {get; set;}
    public string Email {get; set;}
    public string? FirstName {get; set;}
    public string? LastName {get; set;}
    public string? UserType {get; set;}
    public string? CreatedAt {get; set;}
    public DateTime LastLogin {get; set;}
    public DateOnly Dob {get; set;}
    public string? CreatedBy {get; set;}
    public string? Image {get; set;}
}
