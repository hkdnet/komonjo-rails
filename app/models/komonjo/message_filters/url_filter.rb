module Komonjo
  module MessageFilters
    class UrlFilter
      def initialize(_)
      end

      def process(message)
        num = 0
        message.text = message.text.gsub(/<(http.+?)>/) do |m|
          url = m[1...-1]
          key = "url_#{num}"
          message.meta[key] = url
          "${#{key}}"
        end
        message
      end

      def self.required_data
        []
      end
    end
  end
end
