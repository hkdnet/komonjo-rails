module Api
  class MessagesController < ApiController
    def index
      @messages = fetch_messages
      @messages.each do |m|
        not_replaced = m.partial_messages.select do |e|
          e.type == :emoji && e.markdown.start_with?(':')
        end
        not_replaced.each do |e|
          if e.markdown =~ /:skin-tone-\d:/
            e.instance_variable_set('@text', '')
            next
          end
          code = e.markdown[1..-2]
          n = Somemoji.twemoji_emoji_collection.replace_code(e.markdown) { |a| emojify(a) }
          e.instance_variable_set('@markdown', n)
        end
      end
    end

    def emojify(emoji)
      path = emoji.base_path.gsub("unicode/", "")
      "![#{emoji.character}](https://cdnjs.cloudflare.com/" \
        "ajax/libs/twemoji/2.2.1/72x72/#{path}.png)"
    end

    def fetch_messages
      client.messages(params[:channel_name])
    end
  end
end
