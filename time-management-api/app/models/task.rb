class Task < ApplicationRecord
    validates :title, presence: true
    validates :day, presence: true
end
