class ToDo < ApplicationRecord
  validates :description, presence: true
end
