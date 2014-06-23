namespace AngularJSDemo.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initversion : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Todoes",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 500),
                        Description = c.String(nullable: false),
                        Date = c.DateTime(nullable: false),
                        Status = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Todoes");
        }
    }
}
