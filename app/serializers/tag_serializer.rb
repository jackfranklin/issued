class TagSerializer < ActiveModel::Serializer
  attributes :title
  has_many :issues, key: :issues
  embed :ids
end
