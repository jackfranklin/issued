class IssueSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :due_date, :user_id, :assignee
  has_many :tags, key: :tags
  embed :ids, include: true
end
