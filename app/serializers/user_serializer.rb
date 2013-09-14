class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :avatar, :email, :username
end
