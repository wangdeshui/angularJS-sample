using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Text;

namespace AngularJSDemo.Data
{
    public class AngularJsDemoDbContext : DbContext
    {
        public AngularJsDemoDbContext()
            : base("AngularJSDemo")
        {
        }

        public DbSet<Todo> Todos { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}
