using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularJSDemo.Web.Startup))]
namespace AngularJSDemo.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
