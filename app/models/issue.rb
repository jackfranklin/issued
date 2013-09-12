class Issue < ActiveRecord::Base
  has_and_belongs_to_many :tags
  belongs_to :user
  accepts_nested_attributes_for :tags
end
