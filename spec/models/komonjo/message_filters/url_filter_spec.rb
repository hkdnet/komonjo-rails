require 'rails_helper'

describe Komonjo::MessageFilters::UrlFilter do
  describe '.required_data' do
    it { expect(described_class.required_data).to be_empty }
  end

  describe '#convert' do
    context '普通のケース' do
      let(:data) { nil }
      let(:message) do
        Komonjo::Model::Message.new.tap do |e|
          e.text = "<http://example.com> nano"
        end
      end
      let(:filter) { described_class.new(data) }
      subject { filter.process(message) }
      it { expect(subject.text).to eq '${url_0} nano' }
      it { expect(subject.meta['url_0']).to eq 'http://example.com' }
    end
  end
end
