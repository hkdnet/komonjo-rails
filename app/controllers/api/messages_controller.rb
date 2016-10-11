module Api
  class MessagesController < ApiController
    def index
      @messages = fetch_messages
    end

    def fetch_messages
      client.messages(params[:channel_name])
    end
  end
end
