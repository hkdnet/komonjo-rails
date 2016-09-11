module Api
  class ChannelsController < ApplicationController
    def index
      @channels = client.channels
    end

    def client
      @client ||= Komonjo::Client.new(token: token.value)
    end

    def token
      @token ||= SlackToken.from_env
    end
  end
end
