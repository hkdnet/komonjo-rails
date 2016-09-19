module Komonjo
  module MessageFilters
    class ReplyFilter
      attr_reader :data

      def initialize(data)
        @data = data
      end

      def process(message)
        message.text = message.text.gsub(/<@(\w+?)>/) do |m|
          id = m[2...-1]
          user = data[:user].find { |e| e.id == id }
          user ? "@#{user.name}" : m
        end
        message
      end

      def self.required_data
        %i(user)
      end
    end
  end
end
