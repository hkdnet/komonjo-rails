module Api
  class MessagesController < ApiController
    def index
      @messages = fetch_messages.map { |m| converter.convert(m) }
    end

    def converter
      @converter ||= Komonjo::MessageConverter.new(filters)
    end

    def fetch_messages
      client.messages(params[:channel_name])
    end

    def filters
      [
        Komonjo::MessageFilters::ReplyFilter
      ]
    end
  end
end
