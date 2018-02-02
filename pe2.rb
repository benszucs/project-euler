# Sum of even fobonacci numbers

a = 1
b = 2
temp = 0
total = 0
while b <= 4000000
  if b % 2 == 0
    total += b
  end
  temp = a + b
  a = b
  b = temp
end

puts total
