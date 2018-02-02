# Largest prime factor

n = 600851475143
counter = 2
while counter < n
  if n % counter == 0
    n /= counter
  end
  counter += 1
end
puts n
