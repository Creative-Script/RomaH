public class Room
{
    public int Id { get; set; }
    public string Name {get; set;}
    public string Description {get; set;}
    public DateTime CreatedAt {get; set;}
    public DateTime ModifiedAt{get; set;}
    public int Qty {get; set;}
    public string Size {get; set;}
    public bool OnPromotion {get; set;}
    public bool SelfContained {get; set;}
    public int CreatedBy {get; set;}

    public string? Image {get; set;}

}
