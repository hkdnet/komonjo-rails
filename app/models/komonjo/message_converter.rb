module Komonjo
  class MessageConverter
    attr_reader :filters

    def initialize(filters)
      @filters = Array.wrap(filters)
    end

    def convert(message)
      filter_instances.inject(message) { |a, e| e.process(a) }
    end

    def data
      @data ||=
        begin
          required_data.each_with_object({}) do |e, a|
            case e
            when :user
              a[e] = client.users
            end
          end
        end
    end

    def filter_instances
      @filter_instances ||= filters.map { |e| e.new(data) }
    end

    def required_data
      @required_data ||= filters.map(&:required_data).flatten.uniq.compact
    end

    def client
      @client ||= Komonjo::Client.new(token: token.value)
    end

    def token
      @token ||= SlackToken.from_env
    end
  end
end
