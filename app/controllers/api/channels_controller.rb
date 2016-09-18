module Api
  class ChannelsController < ApiController
    def index
      @channels = client.channels
    end
  end
end
