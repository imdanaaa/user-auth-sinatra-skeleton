get '/sessions' do
  erb :'/sessions/new'
end

post '/sessions' do
  @user = User.find_by(email: params[:email])
  if @user && @user.authenticate(params[:password])
    login(@user)
    redirect "/users/#{@user.id}"
  else
    @error = "Email and/or password are invalid, try again"
    erb :'/sessions/new'
  end
end

get '/sessions/logout' do
  logout
  redirect "/"
end
