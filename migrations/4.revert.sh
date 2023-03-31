# Je prends l'identité admin_ocolis
export PGUSER=admin_stocktracker
export PGPASSWORD=stocktracker

sqitch revert # revert tout
# sqitch revert 1.create_tables
