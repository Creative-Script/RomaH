# Roma Hotel

### DESCRIPTION

Hotel management suite.

### Set up

The set up will require you to  use the  terminal or power shell.

1. Restore any missing packages

`dotnet restore`

2. Add a .env file

CONNECTION_STRING can be configured to your local database server,
SECURITY_KEY will be used to configure authorization access to  your web application.

3. Ensure your local database is updated

Update your local database using existing migrations
`dotnet ef database update`

To remove migrations
`dotnet ef migrations remove <migration_name>`

to add migrations
` dotnet ef migrations add <migration_name> `

4. Run the application

To run the app while adding changes
`dotnet watch run`

otherwise use
`dotnet watch run`

5. Deploy the application




To Run queries in docker

`/opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P 'MyStrongPassword123' -s ',' -h -1 -Q "use  hoteldb; select * from Users;"`
