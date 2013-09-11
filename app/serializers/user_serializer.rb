class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :avatar, :email
end
