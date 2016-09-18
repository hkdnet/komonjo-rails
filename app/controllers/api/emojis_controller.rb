module Api
  class EmojisController < ApiController
    def index
      @emojis = client.emoji
    end
  end
end
