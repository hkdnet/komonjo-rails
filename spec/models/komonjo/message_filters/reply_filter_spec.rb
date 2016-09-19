require 'rails_helper'

describe Komonjo::MessageFilters::ReplyFilter do
  describe '.required_data' do
    it { expect(described_class.required_data).to eq [:user] }
  end

  describe '#convert' do
    context '普通のケース' do
      let(:yayoi) do
        Komonjo::Model::User.new.tap do |e|
          e.id = 'YT14537'
          e.name = 'yayoi'
        end
      end
      let(:miki) do
        Komonjo::Model::User.new.tap do |e|
          e.id = 'MH16145'
          e.name = 'miki'
        end
      end
      let(:data) do
        {
          user: [yayoi, miki]
        }
      end
      let(:message) do
        Komonjo::Model::Message.new.tap do |e|
          e.text = "<@YT14537> A-fuxu...Sleepy..."
        end
      end
      let(:filter) { Komonjo::MessageFilters::ReplyFilter.new(data) }
      subject { filter.process(message) }
      it { expect(subject.text).to eq '@yayoi A-fuxu...Sleepy...' }
    end
  end
end
