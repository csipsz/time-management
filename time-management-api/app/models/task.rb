class Task < ApplicationRecord
    validates :title, presence: true
    validates :day, presence: true

    validate :no_madeup_days
    private 

    def no_madeup_days 
        days = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]

        if !days.include? self.day.upcase 
            self.errors.add(:day, " must exist")
        end 
    end 

end
