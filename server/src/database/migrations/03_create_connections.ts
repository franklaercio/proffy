import Knex from 'knex';

export async function up(knex: Knex){
   return knex.schema.createTable('connections', table => {
       table.integer("user_id").notNullable().references("id").inTable("users").onUpdate('').onDelete("CASCADE");

       table.timestamp('created_ad').defaultTo('now()').notNullable();
   });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('connections');
}