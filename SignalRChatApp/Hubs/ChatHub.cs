using Microsoft.AspNetCore.SignalR;

namespace SignalRChatApp.Hubs
{
    public class ChatHub : Hub
    {
        public async Task SendMessage(string message, string User)
        {
            await Clients.All.SendAsync("RecieveMessage",message, User);
        }
    }
}
