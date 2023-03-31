# donner les droits d'exécution du fichier :
# chmod +x init_db.sh 

# Je prends l'identité de spedata :
export PGUSER=spedata

# Je supprime la BDD stocktracker et l'utilisateur admin_stocktracker
dropdb stocktracker
echo "BDD supprimée"
dropuser admin_stocktracker
echo "admin_stocktracker supprimé"

# Je crèe la BDD stocktracker et l'utilisateur admin_stocktracker
createuser admin_stocktracker -P
echo "admin_stocktracker créé"
createdb stocktracker -O admin_stocktracker
echo "BDD créée"

# Je supprime sqitch.conf et sqitch.plan
rm sqitch.conf
rm sqitch.plan

# J'initiase Sqitch
sqitch init stocktracker --target db:pg:stocktracker
echo "Sqitch initialisé"