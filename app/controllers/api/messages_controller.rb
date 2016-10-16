module Api
  class MessagesController < ApiController
    def index
      @messages = fetch_messages
      require 'pry'

      @messages.each do |m|
        not_replaced = m.partial_messages.select do |e|
          e.type == :emoji && e.markdown.start_with?(':')
        end
        not_replaced.each do |e|
          code = e.markdown[1..-2]
          n = Somemoji.emoji_one_emoji_collection.replace_code(e.markdown) { |a| emojify(a) }
          e.instance_variable_set('@markdown', n)
        end
      end
    end

    def emojify(emoji)
      path = emoji.base_path.gsub("unicode/", "")
      "![#{emoji.character}](https://cdnjs.cloudflare.com/" \
        "ajax/libs/emojione/2.2.6/assets/png/#{path}.png)"
    end

    def fetch_messages
      client.messages(params[:channel_name])
    end
  end
end
