module Api
  class MessagesController < ApplicationController
    def index
      @messages = client.messages(params[:channel_name])
    end

    def client
      @client ||= Komonjo::Client.new(token: token.value)
    end

    def token
      @token ||= SlackToken.from_env
    end
  end
end
