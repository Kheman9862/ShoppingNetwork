using System.Linq;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
         public static async Task SeedUsersAsync(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "garg",
                    Email = "garg@test.com",
                    UserName = "garg@test.com",
                    Address = new Address
                    {
                        FirstName = "Kheman",
                        LastName = "Garg",
                        Street = "250 East Squire Dr.",
                        City = "New York",
                        State = "NY",
                        ZipCode = "14623"
                    }
                };

                await userManager.CreateAsync(user, "Pa$$w0rd");
            }
    }
}

}