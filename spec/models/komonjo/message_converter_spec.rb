require 'rails_helper'

describe Komonjo::MessageConverter do
  let(:filters) { Komonjo::MessageFilters::ReplyFilter }
  let(:converter) { described_class.new(filters) }

  describe '#required_data' do
    subject { converter.required_data }
    it { is_expected.to include :user }
  end

  describe '#data' do
    subject { converter.data }
    it { is_expected.to include :user }
  end
end
