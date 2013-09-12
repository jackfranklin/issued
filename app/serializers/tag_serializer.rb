class TagSerializer < ActiveModel::Serializer
  attributes :title, :id
  has_many :issues, key: :issues
  embed :ids, include: true
end
