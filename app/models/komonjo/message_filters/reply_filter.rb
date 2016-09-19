module Komonjo
  module MessageFilters
    class ReplyFilter
      attr_reader :data

      def initialize(data)
        @data = data
      end

      def process(message)
        num = 0
        message.text = message.text.gsub(/<@(\w+?)>/) do |m|
          id = m[2...-1]
          user = data[:user].find { |e| e.id == id }
          next m unless user
          key = "reply_#{num}"
          num += 1
          message.meta[key] = "@#{user.name}"
          "${#{key}}"
        end
        message
      end

      def self.required_data
        %i(user)
      end
    end
  end
end
