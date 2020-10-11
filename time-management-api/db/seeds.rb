# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Task.create(completed: false, day: 'Monday', title: "Funfair", description: 'Go and buy some cotton candy and throw it back up from Titanic')
Task.create(completed: false, day: 'Tuesday', title: "Circus", description: 'Bribe the Clown')
Task.create(completed: false, day: 'Wednesday', title: "Movie Theater", description: 'Jalapeno eating contest while watching a horror movie')
Task.create(completed: false, day: 'Thursday', title: "Opera", description: 'Behave  nice for once')
Task.create(completed: false, day: 'Friday', title: "Zoo", description: 'Feeding Giraffes even though the sign says not to')