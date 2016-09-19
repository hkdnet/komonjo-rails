module Komonjo
  module MessageFilters
    class UrlFilter
      def initialize(_)
      end

      def process(message)
        message.text = message.text.gsub(/<(http.+?)>/) { |m| m[1...-1] }
        message
      end

      def self.required_data
        []
      end
    end
  end
end
