using System.Web;
using System.Web.Optimization;

namespace AngularJSDemo.Web
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/vendor/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/vendor/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/vendor/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/vendor/bootstrap.js",
                      "~/Scripts/vendor/respond.js"));


            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                      "~/Scripts/vendor/angular.js",
                      "~/Scripts/vendor/angular-animate.js"
                      ));

            bundles.Add(new ScriptBundle("~/bundles/angularUI").Include(
                     "~/Scripts/vendor/angular-ui/*.js"
                     ));


            bundles.Add(new ScriptBundle("~/bundles/TodoApp").Include(
                     "~/Scripts/TodoApp.js",
                     "~/Scripts/vendor/moment.js",
                     "~/Scripts/vendor/bootstrap-datetimepicker.js",
                     "~/Scripts/Directives.js",
                     "~/Scripts/Events.js",
                     "~/Scripts/Filters.js",
                         "~/Scripts/TodoService.js"
                     ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css",
                      "~/Scritps/angular-csp.css",
                      "~/Content/bootstrap-datetimepicker.css"
                      ));
        }
    }
}
