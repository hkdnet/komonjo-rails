module Api
  class MessagesController < ApiController
    def index
      @messages = client.messages(params[:channel_name])
    end
  end
end
