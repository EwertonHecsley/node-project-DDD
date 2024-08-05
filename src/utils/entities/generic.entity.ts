import { randomUUID } from 'node:crypto';

export default abstract class Entity<T> {
    private entityId: string;
    protected attributes: T;

    protected constructor(attibutes: T, id?: string) {
        this.entityId = id ?? randomUUID().toString();
        this.attributes = attibutes;
    }

    get id(): string {
        return this.entityId;
    }
}