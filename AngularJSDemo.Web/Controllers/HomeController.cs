using System;
using System.Collections.Generic;
 
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AngularJSDemo.Data;

namespace AngularJSDemo.Web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }


        public JsonResult GetAll()
        {
          return  Json(new AngularJsDemoDbContext().Todos.OrderByDescending(x => x.Date),JsonRequestBehavior.AllowGet);

        }


        public ActionResult Popup()
        {
            return View(); 
        }

        public ActionResult Directive()
        {
            return View();
        }


        public JsonResult Search(string searchText)


        {
            if (string.IsNullOrEmpty(searchText))
            {
                return Json(new AngularJsDemoDbContext().Todos.OrderByDescending(x => x.Date), JsonRequestBehavior.AllowGet);
            }

            return  Json(new AngularJsDemoDbContext().Todos.Where(x=>x.Name.Contains(searchText)).OrderByDescending(x => x.Date),JsonRequestBehavior.AllowGet);   
        }


        public JsonResult AddTodo(Todo todoItem)
        {
            var dbcontext = new AngularJsDemoDbContext();

            var Todo = dbcontext.Todos.SingleOrDefault(x => x.Id == todoItem.Id);
            if (Todo == null)
            {

                dbcontext.Todos.Add(todoItem);
            }
            else
            {
                Todo.Name = todoItem.Name;
                Todo.Description = todoItem.Description;
                Todo.Date = todoItem.Date;
                Todo.Status = todoItem.Status;
            }


            dbcontext.SaveChanges();


            return Json(new AngularJsDemoDbContext().Todos.OrderByDescending(x => x.Date)); 
        }

        public void Delete(int id)
        {
            var dbcontext = new AngularJsDemoDbContext();

            var item = dbcontext.Todos.Single(x => x.Id == id);

            dbcontext.Todos.Remove(item);
            dbcontext.SaveChanges();
            
        }
    }

}